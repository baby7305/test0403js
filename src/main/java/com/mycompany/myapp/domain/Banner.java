package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import org.springframework.data.elasticsearch.annotations.Document;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Banner.
 */
@Entity
@Table(name = "banner")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "banner")
public class Banner implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "banner")
    private String banner;

    @Column(name = "describs")
    private String describs;

    @Column(name = "isdelete")
    private Integer isdelete;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBanner() {
        return banner;
    }

    public Banner banner(String banner) {
        this.banner = banner;
        return this;
    }

    public void setBanner(String banner) {
        this.banner = banner;
    }

    public String getDescribs() {
        return describs;
    }

    public Banner describs(String describs) {
        this.describs = describs;
        return this;
    }

    public void setDescribs(String describs) {
        this.describs = describs;
    }

    public Integer getIsdelete() {
        return isdelete;
    }

    public Banner isdelete(Integer isdelete) {
        this.isdelete = isdelete;
        return this;
    }

    public void setIsdelete(Integer isdelete) {
        this.isdelete = isdelete;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Banner banner = (Banner) o;
        if (banner.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), banner.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Banner{" +
            "id=" + getId() +
            ", banner='" + getBanner() + "'" +
            ", describs='" + getDescribs() + "'" +
            ", isdelete=" + getIsdelete() +
            "}";
    }
}
