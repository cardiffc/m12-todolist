package main;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.Random;

@RestController
public class DefaultController {
    @RequestMapping("/")
    public String index() {
        return (new Date().toString());
    }
    @RequestMapping("/random")
    public int random() {
        Random random = new Random();
        return random.nextInt(1000);
    }
}
