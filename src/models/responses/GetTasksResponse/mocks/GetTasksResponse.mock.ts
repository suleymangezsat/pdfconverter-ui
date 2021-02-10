import { Status } from "../../UploadFilesResponse";

export const GetTasksResponse = {
  data: [
    {
      id: "60231aa79846bd684dfdaef9",
      status: Status.SUCCESS,
      originalFile: {
        name: "Full stack test assignment.pdf",
        size: 53829,
        contentType: "application/pdf",
      },
      createdAt: new Date(),
      message: "initialized",
    },
    {
      id: "602319ce9846bd684dfdaef8",
      status: Status.SUCCESS,
      originalFile: {
        name: "System design interview.pdf",
        size: 62046,
        contentType: "application/pdf",
      },
      createdAt: new Date(),
      message: "initialized",
    },
  ],
};
