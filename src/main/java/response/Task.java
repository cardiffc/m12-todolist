package response;

public class Task {
    private int id;
    private String name;
    private String description;

    public Task(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getDescriptionl() {
        return description;
    }
    public void setDescriptionl(String descriptionl) {
        this.description = descriptionl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
