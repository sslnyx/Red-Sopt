import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_URL

const api = 'wp/v2/projects'
const packagesApi = 'wp/v2/packages'
const pagesApi = 'wp/v2/pages'
const projectstwApi = 'wp/v2/projectstw'

const param = {
  params: {
    per_page: 100, // Only retrieve the 3 most recent blog posts.
    page: 1, // Current page of the collection.
    _embed: true // Response should include embedded resources.
  }
}

const state = {
  projects: [],
  pages: [],
  fsPackages: [],
  projectstw: [],

  allPagesLoaded: false,
  allProjectsLoaded: false,
  allPackagesLoaded: false,
  allProjectsTWLoaded: false
}

const getters = {
  CindysPortfolio: (state) => state.projects,
  allPages: (state) => state.pages,
  allPackages: (state) => state.fsPackages,
  TWPortfolio: (state) => state.projectstw,

  getPackage: (state) => (id) => {
    return state.fsPackages.find((fsPackage) => fsPackage.slug === id)
  },
  getProject: (state) => (id) => {
    return state.projects.find((project) => project.id === id)
  },
  getPage: (state) => (id) => {
    return state.pages.find((page) => page.slug === id)
  },
  getProjectTw: (state) => (id) => state.projectstw.find((projecttw) => projecttw.id === id)
}

const actions = {
  async fetchProjects ({ commit }) {
    const response = await axios.get(api, param)
    commit('SET_PROJECTS', response.data)
    commit('SET_PROJECTS_LOAD', true)
  },

  async fetchPages ({ commit }) {
    const response = await axios.get(pagesApi, param)
    commit('SET_PAGES', response.data)
    commit('SET_PAGES_LOAD', true)
  },

  async fetchPackages ({ commit }) {
    const response = await axios.get(packagesApi, param)
    commit('SET_FSPACKAGES', response.data)
    commit('SET_FSPACKAGES_LOAD', true)
  },

  async fetchProjectsTW ({ commit }) {
    const response = await axios.get(projectstwApi, param)
    commit('SET_PROJECTSTW', response.data)
    commit('SET_PROJECTSTW_LOAD', true)
  }
}

const mutations = {
  SET_PROJECTS: (state, projects) => (state.projects = projects),
  SET_PAGES: (state, pages) => (state.pages = pages),
  SET_PAGES_LOAD: (state, val) => (state.allPagesLoaded = val),
  SET_PROJECTS_LOAD: (state, val) => (state.allProjectsLoaded = val),
  SET_FSPACKAGES: (state, fsPackages) => (state.fsPackages = fsPackages),
  SET_FSPACKAGES_LOAD: (state, val) => (state.allPackagesLoaded = val),
  SET_PROJECTSTW: (state, projectstw) => (state.projectstw = projectstw),
  SET_PROJECTSTW_LOAD: (state, val) => (state.allProjectsTWLoaded = val)
}

export default {
  state,
  getters,
  actions,
  mutations
}
