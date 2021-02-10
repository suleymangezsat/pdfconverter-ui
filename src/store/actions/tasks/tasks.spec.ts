import { TaskActions } from "./tasks";
import { ConvertingTask } from "../../state/tasks";
import taskAPI from "../../../services/API/TaskAPI";
import { AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { GetTasksResponse } from "../../../models/responses/GetTasksResponse";
import { GetTasksResponse as MockedGetTasksResponse } from "../../../models/responses/GetTasksResponse/mocks/GetTasksResponse.mock";
import { ConvertingTasks as MockedConvertingTasks } from "../../../models/responses/UploadFilesResponse/mocks/ConvertingTasks.mock";

jest.mock("../../../services/API/TaskAPI");

describe("store/actions", () => {
  describe("Add Tasks", () => {
    it("should create an action to add new tasks", () => {
      const expectedAction = {
        type: "tasks/add",
        payload: MockedConvertingTasks,
      };
      expect(TaskActions.addTask(MockedConvertingTasks)).toEqual(
        expectedAction
      );
    });
  });
  describe("Async Actions", () => {
    let api: jest.Mocked<typeof taskAPI>;

    beforeAll(() => {
      api = taskAPI as any;
    });

    afterAll(() => {
      jest.unmock("../../../services/API/TaskAPI");
    });

    describe("Fetch All", () => {
      let action: AsyncThunkAction<ConvertingTask[], void, {}>;

      let dispatch: Dispatch;
      let getState: () => unknown;

      let result: GetTasksResponse;

      beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();

        api.fetchAll.mockClear();

        action = TaskActions.fetchAll();
      });

      it("should call the api correctly", async () => {
        api.fetchAll.mockResolvedValue(result);
        result = MockedGetTasksResponse;
        await action(dispatch, getState, undefined);
        expect(api.fetchAll).toHaveBeenCalled();
      });

      it("should trigger fetchAll fulfilled", async () => {
        api.fetchAll.mockResolvedValue(result);
        result = MockedGetTasksResponse;
        await action(dispatch, getState, undefined);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).lastCalledWith(
          expect.objectContaining({
            type: "tasks/fetchAll/fulfilled",
          })
        );
      });
      it("should trigger fetchAll rejected", async () => {
        api.fetchAll.mockRejectedValue("No Result");
        await action(dispatch, getState, undefined);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).lastCalledWith(
          expect.objectContaining({
            type: "tasks/fetchAll/rejected",
          })
        );
      });
    });

    describe("Fetch By IDs", () => {
      let action: AsyncThunkAction<ConvertingTask[], string[], {}>;

      let dispatch: Dispatch;
      let getState: () => unknown;

      let payload: string[] = ["123", "456", "789"];
      let result: GetTasksResponse;

      beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();

        api.fetchAll.mockClear();
      });

      it("should call the api correctly", async () => {
        action = TaskActions.fetchByIdList(payload);
        api.fetchAll.mockResolvedValue(result);
        result = MockedGetTasksResponse;
        await action(dispatch, getState, undefined);
        expect(api.fetchByIdList).toHaveBeenCalledWith(payload);
      });

      it("should trigger fetchByIdList fulfilled", async () => {
        api.fetchByIdList.mockResolvedValue(result);
        result = MockedGetTasksResponse;
        await action(dispatch, getState, undefined);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).lastCalledWith(
          expect.objectContaining({
            type: "tasks/fetchByIdList/fulfilled",
          })
        );
      });
      it("should trigger fetchByIdList rejected", async () => {
        api.fetchByIdList.mockRejectedValue("No Result");
        await action(dispatch, getState, undefined);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).lastCalledWith(
          expect.objectContaining({
            type: "tasks/fetchByIdList/rejected",
          })
        );
      });
    });
  });
});
