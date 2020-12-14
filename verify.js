const https = require('https');

exports.handler = async event => {
    const recaptchaToken = event.queryStringParameters.rt
    const clientIp = event.requestContext.http.sourceIp

    const googleVerifyURL = new URL('https://www.google.com/recaptcha/api/siteverify')
    googleVerifyURL.searchParams.append('secret', process.env.RECATPCHA_SECRET)
    googleVerifyURL.searchParams.append('response', recaptchaToken)
    googleVerifyURL.searchParams.append('remoteip', clientIp)

    const options = {
        method: 'POST',
        host: googleVerifyURL.host,
        path: `${googleVerifyURL.pathname}${googleVerifyURL.search}`,
        port: 443,
    }

    const verifyPromise = new Promise(((resolve, reject) => {
        const body = []
        https.request(options, resp => {
            resp.on('data', chunk => body.push(chunk))
            resp.on('end', () => resolve(Buffer.concat(body).toString()))
            resp.on('error', reject)
        })
            .end()
    }))

    const googleResp = await verifyPromise
    const assessment = JSON.parse(googleResp)

    const response = {}
    if ( assessment > 0.5) {
        response.statusCode = 200
        response.body = JSON.stringify({
            email: process.env.PERSONAL_EMAIL
        })
    } else {
        response.statusCode = 400
    }
    return response;
}
