package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Banner;
import com.mycompany.myapp.domain1.Banner1DTO;
import com.mycompany.myapp.service.BannerService1;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;

@RestController
@RequestMapping("/api")
public class BannerResource1 {

    //    private static final Logger=LoggerFactory.
    @Autowired
    private BannerService1 bannerService1;

    //    @RequestMapping(value = "/add", method = RequestMethod.GET);
    @GetMapping("/banners1")
    public Banner getBydescirbs(@RequestParam("describs") String describs) {
        return bannerService1.getByDescribs(describs);
    }
}
