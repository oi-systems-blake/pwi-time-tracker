/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTimeSheet = /* GraphQL */ `
  query GetTimeSheet($id: ID!) {
    getTimeSheet(id: $id) {
      id
      dayName
      dayNumber
      month
      year
      punches
      date
      total_hours
      employeeID
      TimeSheetEntrys {
        items {
          id
          allocated_hours
          untitledfield
          timesheetID
          projectsID
          travelersID
          EmployeeID
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
export const listTimeSheets = /* GraphQL */ `
  query ListTimeSheets(
    $filter: ModelTimeSheetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeSheets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dayName
        dayNumber
        month
        year
        punches
        date
        total_hours
        employeeID
        TimeSheetEntrys {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTimeSheetEntrys = /* GraphQL */ `
  query GetTimeSheetEntrys($id: ID!) {
    getTimeSheetEntrys(id: $id) {
      id
      allocated_hours
      untitledfield
      timesheetID
      projectsID
      travelersID
      EmployeeID
      createdAt
      updatedAt
    }
  }
`;
export const listTimeSheetEntrys = /* GraphQL */ `
  query ListTimeSheetEntrys(
    $filter: ModelTimeSheetEntrysFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeSheetEntrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        allocated_hours
        untitledfield
        timesheetID
        projectsID
        travelersID
        EmployeeID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
