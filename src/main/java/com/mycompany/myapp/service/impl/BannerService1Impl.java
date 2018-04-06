package com.mycompany.myapp.service.impl;

import com.mycompany.myapp.domain.Banner;
import com.mycompany.myapp.repository.BannerMapper;
import com.mycompany.myapp.service.BannerService1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BannerService1Impl implements BannerService1 {
    @Autowired
    public BannerMapper bannerMapper;

    @Override
    public Banner getByDescribs(String describs) {
        return bannerMapper.findBannerByDescribs(describs);
    }
}
