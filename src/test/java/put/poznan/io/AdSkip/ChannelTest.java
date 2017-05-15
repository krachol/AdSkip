package put.poznan.io.AdSkip;

/**
 * Created by jacek on 15/05/17.
 */

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class ChannelTest {

    Channel channel, newChannel;

    @Before
    public void initializeChannelObject() {
        channel = new Channel(1, "TVP1", "Telexpress", "Program", true);
    }

    @Test
    public void testConstructor() {
        assertTrue(channel instanceof Channel);
    }

    @Test
    public void testgetId() {
        assertEquals(channel.getId(), 1);
    }

    @Test
    public void testgetName() {
        assertEquals(channel.getName(), "TVP1");
    }

    @Test
    public void testgetProgram() {
        assertEquals(channel.getProgram(), "Telexpress");
    }

    @Test
    public void testgetStatus() {
        assertEquals(channel.getStatus(), "Program");
    }

    @Test
    public void testisWatched() {
        assertEquals(channel.isWatched(), true);
    }

    @Test
    public void testsetId() {
        channel.setId(1);
        assertEquals(channel.getId(), 1);
    }

    @Test
    public void testsetName() {
        channel.setName("Canal+");
        assertEquals(channel.getName(), "Canal+");
    }

    @Test
    public void testsetProgram() {
        channel.setProgram("Miodowe lata");
        assertEquals(channel.getProgram(), "Miodowe lata");
    }

    @Test
    public void testsetStatus() {
        channel.setStatus("Reklama");
        assertEquals(channel.getStatus(), "Reklama");
    }

    @Test
    public void testsetWatched() {
        channel.setWatched(false);
        assertEquals(channel.isWatched(), false);
    }
}
