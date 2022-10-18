/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTravelers = /* GraphQL */ `
  query GetTravelers($id: ID!) {
    getTravelers(id: $id) {
      id
      display_name
      installation_location
      status
      projectsID
      createdAt
      updatedAt
    }
  }
`;
export const listTravelers = /* GraphQL */ `
  query ListTravelers(
    $filter: ModelTravelersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTravelers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        display_name
        installation_location
        status
        projectsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProjects = /* GraphQL */ `
  query GetProjects($id: ID!) {
    getProjects(id: $id) {
      id
      display_name
      status
      location
      TimeSheet {
        items {
          id
          month
          year
          dayNumber
          dayName
          hours
          total_hours_day
          employeeID
          projectsID
          createdAt
          updatedAt
        }
        nextToken
      }
      Travelers {
        items {
          id
          display_name
          installation_location
          status
          projectsID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        display_name
        status
        location
        TimeSheet {
          nextToken
        }
        Travelers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      allocated_hours
      untitledfield
      timesheetID
      projectsID
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        allocated_hours
        untitledfield
        timesheetID
        projectsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTimeSheet = /* GraphQL */ `
  query GetTimeSheet($id: ID!) {
    getTimeSheet(id: $id) {
      id
      month
      year
      dayNumber
      dayName
      hours
      total_hours_day
      employeeID
      projectsID
      createdAt
      updatedAt
    }
  }
`;
export const listTimeSheets = /* GraphQL */ `
  query ListTimeSheets(
    $filter: ModelTimeSheetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeSheets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        month
        year
        dayNumber
        dayName
        hours
        total_hours_day
        employeeID
        projectsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      login_pin
      first_name
      last_name
      supervisor
      status
      normal_start_time
      email
      employee_timesheet {
        items {
          id
          month
          year
          dayNumber
          dayName
          hours
          total_hours_day
          employeeID
          projectsID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        login_pin
        first_name
        last_name
        supervisor
        status
        normal_start_time
        email
        employee_timesheet {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
