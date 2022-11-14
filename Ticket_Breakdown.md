# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here


# Ticket 1

Column to store customIds against individual agent in Agent Table
 - Implementation details
 1. Create a column in Agent table. 
 ### acceptance criteria
  - Column should be indexed so that is will better for searches
 ### unknowns:
  - Type of customId. (can be a number or string).
  - Max Length of the id.
  - Can it be null ? I mean is it a required field at the time of creation or it will be updated later. So accordingly column can be null or not null.
  ### time/effort estimates
  - Once the unknowns are cleared it shouldn't take more than half an hour to complete the task.

# Ticket 2

API to store customIds against individual agent in Agent Table
 ### acceptance criteria
  - Make sure the ids are unique to each agent.
  - Make all the necessary validations after the unknowns from Ticket 1 are cleared.
### time/effort estimates
  - Should take around 2 hours.

# Ticket 3

Refactor `getShiftsByFacility` API add agent's customId in the meta data.
### implementation details
 - Currently we get agent meta data, we'll just have to include the new key that is being added to the column.
### acceptance criteria
  - CustomId cannot be null.
### time/effort estimates
  - Should take around 2 hours.

# Ticket 4

Refactor `generateReport` API return reports based on customId.

### implementation details
 - Instead of searching it with id we will now search agent with customId.
 - After getting the agent details we will generate report based on the id we get from step 1.
### acceptance criteria
  - Should throw an exception if customId is not found in agent table.
  - CustomId cannot be null.
### time/effort estimates
  - Should take around 2 hours.
