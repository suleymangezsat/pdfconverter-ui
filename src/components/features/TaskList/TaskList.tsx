import {
  CircularProgress,
  IconButton,
  List,
  Typography,
} from "@material-ui/core";
import { ReactElement, useEffect, useState } from "react";
import TextFileIcon from "@material-ui/icons/Description";
import { PageDialog } from "../../common/PageDialog";
import { Loader } from "../../common/Loader";
import { FileListItem } from "../../common/FileListItem";
import { ConvertingTask } from "../../../store/state/tasks";
import { useInterval, useTaskStore, usePageStore } from "../../../hooks/";

export const TaskList = (): ReactElement => {
  const [activeTaskId, setActiveTaskId] = useState<string>();
  const { fetchAll, fetchByIdList, tasks } = useTaskStore();
  const { fetchById, pages } = usePageStore();

  const handleOpenDialog = async function (task: ConvertingTask) {
    setActiveTaskId(task.id);
    if (!pages[task.id]?.data) {
      await fetchById(task.id);
    }
  };

  useInterval(
    () => {
      const ids = tasks.data
        .filter((task) => task.status === "INIT")
        .map((filtered) => filtered.id);
      ids.length > 0 && fetchByIdList(ids);
    },
    tasks.data.filter((task) => task.status === "INIT").length > 0 ? 1000 : null
  );

  useEffect(() => {
    !tasks.initialized && fetchAll();
  }, [tasks.initialized, fetchAll]);

  return (
    <>
      <Typography variant="h6">List of Files</Typography>
      <Loader loading={tasks.loading} error={tasks.error} onRefresh={fetchAll}>
        <List>
          {tasks?.data?.map((fileTask, index) => (
            <FileListItem
              key={index}
              name={fileTask.originalFile.name}
              size={fileTask.originalFile.size}
              createdAt={fileTask.createdAt}
              status={fileTask.status}
            >
              <IconButton
                edge="end"
                disabled={fileTask.status !== "SUCCESS"}
                onClick={() => handleOpenDialog(fileTask)}
              >
                {pages[fileTask.id]?.loading ? (
                  <CircularProgress size={14} />
                ) : (
                  <TextFileIcon />
                )}
              </IconButton>
            </FileListItem>
          ))}
        </List>
      </Loader>
      <PageDialog
        title="Converted Pages"
        isOpen={!!activeTaskId && !!pages[activeTaskId]?.data}
        onClose={() => setActiveTaskId(undefined)}
        textPages={activeTaskId ? pages[activeTaskId]?.data?.pages : undefined}
      ></PageDialog>
    </>
  );
};
