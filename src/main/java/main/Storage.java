package main;

import response.Task;

import java.util.LinkedList;
import java.util.List;

public class Storage {
    private static List<Task> taskList = new LinkedList<>();

    public static List<Task> getAllTasks () {
        return taskList;
    }

    public static int addTask (Task task) {
        int id = taskList.size() + 1;
        task.setId(id);
        taskList.add(task);
        return id;
    }




}
