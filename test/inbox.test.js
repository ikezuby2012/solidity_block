const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const { interface, bytecode } = require("../compile");

const web3 = new Web3(ganache.provider());

let accounts, inbox;

beforeEach(async () => {
    // get a list of all accounts
    accounts = await web3.eth.getAccounts();
    console.log(accounts);
    //deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments: ["hi there!"]
        })
        .send({
            from: accounts[0],
            gas: "1000000"
        });
});

describe("inbox", () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });
    it("has a default message", async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, "hi there!");
    })
})