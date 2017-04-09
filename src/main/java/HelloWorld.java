/**
 * Created by Mateusz Krasicki on 09.04.2017.
 */

public class HelloWorld {
    private String name;

    public void setName(String name) {
        this.name = name;
    }

    public void printHello() {
        System.out.println("Hello ! " + name);
    }
}