package put.poznan.io.AdSkip;

/**
 * Created by jacek on 15/05/17.
 */

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ChannelController {


    @RequestMapping("/channels")
    public List<Channel> getChannels() {
        List<Channel> channels = new ArrayList<Channel>();

        channels.add(new Channel(1, "TVP1", "Telexpress", "Program", true));
        channels.add(new Channel(2, "TVP2", "Panorama", "Program", true));
        channels.add(new Channel(3, "Polsat", "Pamietniki z wakacji", "Reklama", false));
        channels.add(new Channel(4, "TVN", "Sedzia Anna Maria Wesolowska", "Reklama", false));
        channels.add(new Channel(5, "Eurosport", "Giro d'Italia 2017", "Program", false));

        return channels;
    }

}
