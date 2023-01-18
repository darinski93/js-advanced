function requestValidator(obj) {

    let methods = ['GET', 'POST', 'DELETE', 'CONNECT']
    let uriPattern = /[.]/g
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    let messagePattern = [`<`, `>`, `\\`, `&`, `'`, `"`]
    let p = [`'`]


    console.log(obj.message)

    if (!obj.hasOwnProperty('method')) {
        throw new Error('Invalid request header: Invalid Method')

    } else if (!methods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method')
    }


    if (!obj.hasOwnProperty('uri')) {
        throw new Error('Invalid request header: Invalid URI')
    }
    let uriP = obj.uri.match(uriPattern)

    if (obj['uri'].length === 0) {
        throw new Error('Invalid request header: Invalid URI')
    }

    else if (!uriP && obj['uri'].length > 1) {
        throw new Error('Invalid request header: Invalid URI')
    }
    if (!versions.includes(obj.version) || !obj.hasOwnProperty('version')) {
        throw new Error('Invalid request header: Invalid Version')
    }

    if (!obj.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message')
    }

    //let messageP = obj.message.match(messagePattern)

    if (obj['message'].length === 0 && obj.message === '') {
        return obj
    }

    for (let el of obj.message) {

        if (messagePattern.includes(el)) {

            throw new Error('Invalid request header: Invalid Message')

        }
    }


    return obj

}
requestValidator({
    method: 'GET',
    uri: '*',
    version: 'HTTP/1.1',
    message: ''
}
)