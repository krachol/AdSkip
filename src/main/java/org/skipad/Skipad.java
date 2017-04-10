/**
 * Created by Mateusz Krasicki on 09.04.2017.
 */

package org.skipad;


import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


/**
 * Controller for / path
 */
@Controller
@RequestMapping("/")
public class Skipad {
    /**
     * Main method invoked when server receives GET request on /
     * @param model model for jsp view
     * @return name of the view to return to the client
     */
    @RequestMapping(method = RequestMethod.GET)public String printHello(ModelMap model) {
        model.addAttribute("message", "Hello AdSkip!");
        return "hello";
    }
}