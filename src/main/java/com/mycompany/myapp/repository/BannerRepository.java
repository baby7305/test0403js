package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Banner;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;

import java.util.List;


/**
 * Spring Data JPA repository for the Banner entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BannerRepository extends JpaRepository<Banner, Long> {
//    lis

//    List<Banner> fi
}
