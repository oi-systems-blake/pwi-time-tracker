/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTravelers = /* GraphQL */ `
  mutation CreateTravelers(
    $input: CreateTravelersInput!
    $condition: ModelTravelersConditionInput
  ) {
    createTravelers(input: $input, condition: $condition) {
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
export const updateTravelers = /* GraphQL */ `
  mutation UpdateTravelers(
    $input: UpdateTravelersInput!
    $condition: ModelTravelersConditionInput
  ) {
    updateTravelers(input: $input, condition: $condition) {
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
export const deleteTravelers = /* GraphQL */ `
  mutation DeleteTravelers(
    $input: DeleteTravelersInput!
    $condition: ModelTravelersConditionInput
  ) {
    deleteTravelers(input: $input, condition: $condition) {
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
export const createProjects = /* GraphQL */ `
  mutation CreateProjects(
    $input: CreateProjectsInput!
    $condition: ModelProjectsConditionInput
  ) {
    createProjects(input: $input, condition: $condition) {
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
export const updateProjects = /* GraphQL */ `
  mutation UpdateProjects(
    $input: UpdateProjectsInput!
    $condition: ModelProjectsConditionInput
  ) {
    updateProjects(input: $input, condition: $condition) {
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
export const deleteProjects = /* GraphQL */ `
  mutation DeleteProjects(
    $input: DeleteProjectsInput!
    $condition: ModelProjectsConditionInput
  ) {
    deleteProjects(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createTimeSheet = /* GraphQL */ `
  mutation CreateTimeSheet(
    $input: CreateTimeSheetInput!
    $condition: ModelTimeSheetConditionInput
  ) {
    createTimeSheet(input: $input, condition: $condition) {
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
export const updateTimeSheet = /* GraphQL */ `
  mutation UpdateTimeSheet(
    $input: UpdateTimeSheetInput!
    $condition: ModelTimeSheetConditionInput
  ) {
    updateTimeSheet(input: $input, condition: $condition) {
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
export const deleteTimeSheet = /* GraphQL */ `
  mutation DeleteTimeSheet(
    $input: DeleteTimeSheetInput!
    $condition: ModelTimeSheetConditionInput
  ) {
    deleteTimeSheet(input: $input, condition: $condition) {
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
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
