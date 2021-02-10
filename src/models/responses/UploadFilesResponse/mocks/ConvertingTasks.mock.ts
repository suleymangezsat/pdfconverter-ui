import { ConvertingTask, Status } from "../UploadFilesResponse";

export const ConvertingTasks: ConvertingTask[] = [
  {
    id: "123123123",
    status: Status.INIT,
    originalFile: {
      name: "filename.pdf",
      size: 12000,
      contentType: "application/pdf",
    },
    message: "initialized",
    createdAt: new Date(),
  },
];
