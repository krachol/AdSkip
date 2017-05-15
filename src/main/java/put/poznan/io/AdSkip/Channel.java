package put.poznan.io.AdSkip;

/**
 * Created by jacek on 15/05/17.
 */
public class Channel {
    private long id;
    private String name;
    private String program;
    private String status;
    private boolean watched;


    public Channel(long id, String name, String program, String status, boolean watched) {
        this.id = id;
        this.name = name;
        this.program = program;
        this.status = status;
        this.watched = watched;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getProgram() {
        return program;
    }

    public String getStatus() {
        return status;
    }

    public boolean isWatched() {
        return watched;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setProgram(String program) {
        this.program = program;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setWatched(boolean watched) {
        this.watched = watched;
    }
}
