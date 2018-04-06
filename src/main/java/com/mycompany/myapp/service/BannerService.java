package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Banner;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing Banner.
 */
public interface BannerService {

    /**
     * Save a banner.
     *
     * @param banner the entity to save
     * @return the persisted entity
     */
    Banner save(Banner banner);

    /**
     * Get all the banners.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<Banner> findAll(Pageable pageable);

    /**
     * Get the "id" banner.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Banner findOne(Long id);

    /**
     * Delete the "id" banner.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the banner corresponding to the query.
     *
     * @param query the query of the search
     * 
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<Banner> search(String query, Pageable pageable);
}
