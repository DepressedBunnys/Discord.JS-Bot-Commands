class Command {
    constructor(commandName, commandObject) {
        this._commandName = commandName.toLowerCase();
        this._commandObject = commandObject;
        this.verifySyntax();
    }

    verifySyntax() {
        if (!this.commandObject.callback)
        throw new Error(`A callback function is required to run ${this.commandName}`);
    }

    get commandName() {
        return this._commandName;
    }

    get commandObject() {
        return this._commandObject;
    }

}

module.exports = Command;