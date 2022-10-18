/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTravelers = /* GraphQL */ `
  subscription OnCreateTravelers {
    onCreateTravelers {
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
export const onUpdateTravelers = /* GraphQL */ `
  subscription OnUpdateTravelers {
    onUpdateTravelers {
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
export const onDeleteTravelers = /* GraphQL */ `
  subscription OnDeleteTravelers {
    onDeleteTravelers {
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
export const onCreateProjects = /* GraphQL */ `
  subscription OnCreateProjects {
    onCreateProjects {
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
export const onUpdateProjects = /* GraphQL */ `
  subscription OnUpdateProjects {
    onUpdateProjects {
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
export const onDeleteProjects = /* GraphQL */ `
  subscription OnDeleteProjects {
    onDeleteProjects {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateTimeSheet = /* GraphQL */ `
  subscription OnCreateTimeSheet {
    onCreateTimeSheet {
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
export const onUpdateTimeSheet = /* GraphQL */ `
  subscription OnUpdateTimeSheet {
    onUpdateTimeSheet {
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
export const onDeleteTimeSheet = /* GraphQL */ `
  subscription OnDeleteTimeSheet {
    onDeleteTimeSheet {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
