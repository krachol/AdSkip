/**
 * Created by Mateusz Krasicki on 09.04.2017.
 */

package org.skipad;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/")
public class Skipad {
    @RequestMapping(method = RequestMethod.GET)public String printHello(ModelMap model) {
        model.addAttribute("message", "Hello AdSkip!");
        return "hello";
    }
}