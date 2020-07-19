const { Console } = require("winston/lib/winston/transports");

exports.run = (client, message, args) => {

    let rnd = Math.floor(Math.random() * 20);

    getAnswer(rnd);

    function getAnswer(rnd) {
        if (rnd < 10) message.channel.send(getPositiveAnswer()).catch(console.error);
        else if (rnd < 15) message.channel.send(getNeutralAnswer()).catch(console.error);
        else if (rnd < 20) message.channel.send(getNegativeAnswer()).catch(console.error);
        else {
            Console.log(`Something went wrong. rnd = ${rnd}`);
            message.channel.send(`Something went wrong. I'm sorry, consult with the bot mender!`).catch(console.error);
        }
    }

    function getPositiveAnswer() {
        let rnd = Math.floor(Math.random() * 10);

        switch (rnd) {
            case 0: return `It is certain.`
            case 1: return `It is decidedly so.`
            case 2: return `Without a doubt.`
            case 3: return `Yes - definitely.`
            case 4: return `You may rely on it.`
            case 5: return `As I see it, yes.`
            case 6: return `Most likely.`
            case 7: return `Outlook good.`
            case 8: return `Yes.`
            case 9: return `Signs point to yes.`
        }
    }

    function getNeutralAnswer() {
        let rnd = Math.floor(Math.random() * 5);

        switch (rnd) {
            case 0: return `Reply hazy, try again.`
            case 1: return `Ask again later.`
            case 2: return `Better not tell you now.`
            case 3: return `Cannot predict now.`
            case 4: return `Concentrate and ask again.`
        }
    }

    function getNegativeAnswer() {
        let rnd = Math.floor(Math.random() * 10);

        switch (rnd) {
            case 0: return `Don’t count on it.`
            case 1: return `My reply is no.`
            case 2: return `My sources say no.`
            case 3: return `Outlook not so good.`
            case 4: return `Very doubtful.`
        }
    }
}