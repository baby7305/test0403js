package com.mycompany.myapp.domain1;

import java.io.Serializable;

public class Banner1DTO implements Serializable {
    private Long id;
    private String banner;
    private String describs;
    private Integer isdelete;

    public Banner1DTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBanner() {
        return banner;
    }

    public void setBanner(String banner) {
        this.banner = banner;
    }

    public String getDescribs() {
        return describs;
    }

    public void setDescribs(String describs) {
        this.describs = describs;
    }

    public Integer getIsdelete() {
        return isdelete;
    }

    public void setIsdelete(Integer isdelete) {
        this.isdelete = isdelete;
    }

    @Override
    public String toString() {
        return "Banner1{" +
            "id=" + id +
            ", banner='" + banner + '\'' +
            ", describs='" + describs + '\'' +
            ", isdelete=" + isdelete +
            '}';
    }
}
