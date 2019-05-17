export const OK = 200
export const CREATED = 201
export const ACCEPTED = 202
export const NO_CONTENT = 204
export const UNAUTHORIZED = 401
export const SUCCESS_STATUSES = [OK, CREATED, ACCEPTED, NO_CONTENT]
export const UNERROR_STATUSES = [OK, CREATED, ACCEPTED, NO_CONTENT, UNAUTHORIZED]

export const GET = 'GET'
export const POST = 'POST'
export const PUT = 'PUT'
export const DELETE = 'DELETE'

export function encodeParams(params) {
    const encode = encodeURIComponent
    return Object.keys(params)
        .map(k => `${encode(k)}=${encode(params[k])}`)
        .join('&')
}

export function fetchUtil(url, opts = {}) {

    if (opts.queryParams) {
        url += (~url.indexOf('?') ? '&' : '?') + encodeParams(opts.queryParams) //eslint-disable-line
    }
    return fetch(url, opts)
        .then((res) => {
            if (!UNERROR_STATUSES.includes(res.status)) {
                throw res
            }
            return res
        })
        .then((res) => {
            if (res.status === NO_CONTENT) {
                return null
            }

            const location = res.headers.get('Location')
            const contentType = res.headers.get('content-type')
            const contentDisposition = res.headers.get('content-disposition')
            const created = res.status === CREATED && location ? { id: location.slice(location.lastIndexOf('/') + 1) } : null
            const json = contentType && contentType.includes('application/json') && res.json()
            const blob = contentDisposition && contentDisposition.includes('attachment') && res.blob()
            const pdf = (contentType && contentType.includes('application/attachment')) && res.blob()
            return json || created || blob || pdf
        })
}
