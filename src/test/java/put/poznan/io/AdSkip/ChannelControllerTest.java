package put.poznan.io.AdSkip;

import org.junit.Before;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.mock;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


/**
 * Created by jacek on 15/05/17.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ChannelControllerTest {

    @Autowired
    private ChannelController controllerToTest;

    private MockMvc mockMvc;

    @Before
    public void setup() {
        this.mockMvc = MockMvcBuilders.standaloneSetup(controllerToTest).build();
    }

    @Test
    public void testSayHelloWorld() throws Exception{
        controllerToTest = mock(ChannelController.class);

        this.mockMvc.perform(get("/channels")
                .accept(MediaType.parseMediaType("application/json")))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json;charset=UTF-8"));
    }
}