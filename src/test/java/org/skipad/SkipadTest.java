package org.skipad;

import org.springframework.ui.ModelMap;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

/**
 * Created by Mateusz Krasicki on 09.04.2017.
 */
public class SkipadTest {
    @org.junit.Test
    public void printHello() throws Exception {
        ModelMap mockModelMap = mock(ModelMap.class);
        Skipad skipad = new Skipad();

        assertEquals("hello", skipad.printHello(mockModelMap));
        verify(mockModelMap, times(1)).addAttribute("message", "Hello AdSkip!");
    }

}