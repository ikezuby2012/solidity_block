const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require("../compile");

let lottery;
let accounts;

beforeEach(async () => {
   accounts = await web3.eth.getAccounts();

   lottery = await web3.eth
      .Contract(JSON.parse(interface))
      .deploy({ data: bytecode })
      .send({ from: accounts[0], gas: "1000000" });
});

describe("lottery contract", () => {
   it("deploys a contract", () => {
      assert.ok(lottery.options.address);
   });

   it("it allows one account enter into the contract", async () => {
      await lottery.methods.enter().send({
         from: accounts[0],
         value: web3.utils.toWei("0.02", "ether")
      });

      const players = await lottery.methods.getPlayers().call({
         from: accounts[0]
      });

      assert.equal(accounts[0], players[0]);
      assert.equal(1, players.length);
   });

   it("it allows muiltiple accounts enter into the contract", async () => {
      await lottery.methods.enter().send({
         from: accounts[0],
         value: web3.utils.toWei("0.02", "ether")
      });

      await lottery.methods.enter().send({
         from: accounts[0],
         value: web3.utils.toWei("0.02", "ether")
      });

      await lottery.methods.enter().send({
         from: accounts[1],
         value: web3.utils.toWei("0.02", "ether")
      });
      const players = await lottery.methods.getPlayers().call({
         from: accounts[2]
      });

      assert.equal(accounts[0], players[0]);
      assert.equal(accounts[1], players[1]);
      assert.equal(accounts[2], players[2]);
      assert.equal(3, players.length);
   });

   it("requires a minimum of 0.1 ether", async () => {
      try {
         await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei("0.0", "ether")
         });
         assert(false);
      } catch (err) {
         assert(err.message);
      }
   });

   it("only manager can call", async () => {
      try {
         await lottery.methods.pickWinner().send({
            from: accounts[1]
         });
         assert(false);
      } catch (error) {
         assert(error);
      }
   });

   it("sends money to the winner and reset the function", async () => {
      await lottery.methods.enter({
         from: accounts[0],
         value: web3.utils.toWei("0.5", "ether")
      });

      const _balance = web3.eth.getBalance(accounts[0]);

      await lottery.methods.pickWinner().send({
         from: accounts[0]
      });
      const finalBalance = web3.eth.getBalance(accounts[0]);
      const difference = finalBalance - _balance;
      assert(difference > web3.utils.toWei("1.8", "ether"));
   });
});
