import Kitsu from 'kitsu'

export default function (ctx, inject) {
  const kitsuOptions = {
    baseURL: '<%= options.baseUrl %>',
    <% if (options.headers) { %>headers: <%= JSON.stringify(options.headers, null, 6) %>,<% } %>
    <% if (options.camelCaseTypes) { %>camelCaseTypes: <%= options.camelCaseTypes %>,<% } %>
    <% if (options.resourceCase) { %>resourceCase: '<%= options.resourceCase %>',<% } %>
    <% if (options.pluralize) { %>pluralize: <%= options.pluralize %>,<% } %>
    <% if (options.timeout) { %>timeout: <%= options.timeout %>,<% } %>
    <% if (options.axiosOptions) { %>axiosOptions: <%= serialize(options.axiosOptions) %>,<% } %>
  }

  const jsonApi = new Kitsu(kitsuOptions)

  ctx.$jsonApi = jsonApi
  inject('jsonApi', jsonApi)
}
