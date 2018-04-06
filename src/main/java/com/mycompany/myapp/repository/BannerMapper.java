package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Banner;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface BannerMapper {
    @Select("SELECT * FROM BANNER WHERE DESCRIBS = #{describs}")
    Banner findBannerByDescribs(@Param("describs") String describs);
}
