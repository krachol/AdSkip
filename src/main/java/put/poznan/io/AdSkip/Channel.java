package put.poznan.io.AdSkip;

/**
 * Created by jacek on 15/05/17.
 */
public class Channel {
    /**
     * identyfikator kanału
     */
    private long id;

    /**
     * nazwa kanału
     */
    private String name;

    /**
     * aktualny program
     */
    private String program;

    /**
     * status - reklama czy kanal
     */
    private String status;

    /**
     * czy uzytkownik oglada ten kanal
     */
    private boolean watched;

    /**
     * konstruktor kanału
     * @param id
     * @param name
     * @param program
     * @param status
     * @param watched
     */
    public Channel(long id, String name, String program, String status, boolean watched) {
        this.id = id;
        this.name = name;
        this.program = program;
        this.status = status;
        this.watched = watched;
    }

    /**
     * Getter dla identyfikatora
     * @return identyfikator
     */
    public long getId() {
        return id;
    }

    /**
     * Getter dla nazwy
     * @return nazwa
     */
    public String getName() {
        return name;
    }

    /**
     * Getter dla programu
     * @return program
     */
    public String getProgram() {
        return program;
    }

    /**
     * Getter dla statusu
     * @return status
     */
    public String getStatus() {
        return status;
    }

    /**
     * Getter dla subskrypcji
     * @return
     */
    public boolean isWatched() {
        return watched;
    }

    /**
     * Setter dla identyfikatora
     * @param id
     */
    public void setId(long id) {
        this.id = id;
    }

    /**
     * Setter dla nazwy
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Setter dla programu
     * @param program
     */
    public void setProgram(String program) {
        this.program = program;
    }

    /**
     * Setter dla statusu
     * @param status
     */
    public void setStatus(String status) {
        this.status = status;
    }

    /**
     * Setter dla subskrypcji
     * @param watched
     */
    public void setWatched(boolean watched) {
        this.watched = watched;
    }
}
