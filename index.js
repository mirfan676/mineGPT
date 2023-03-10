const express = require('express')
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-7AVV6V1Kp80srRarTgsD0hxr",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();


const app = express();
const port = 3080;

app.post('/', async (req, res) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
    });
    console.log(response.data.choices[0].text)
    res.json({
        data: response.data
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

