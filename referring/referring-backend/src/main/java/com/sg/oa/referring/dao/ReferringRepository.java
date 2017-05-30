package com.sg.oa.referring.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.sg.oa.referring.model.Referring;

public interface ReferringRepository extends CrudRepository<Referring, Long>, JpaSpecificationExecutor<Referring> {

	@Query("SELECT r FROM Referring r LEFT JOIN FETCH r.letters WHERE r.id = (:id)")
	public Referring findByIdAndFetchLettersEagerly(@Param("id") Long id);

	List<Referring> findBySubjectContaining(@Param("subject") String subject);
}
