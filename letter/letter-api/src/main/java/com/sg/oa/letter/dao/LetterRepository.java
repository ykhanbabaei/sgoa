package com.sg.oa.letter.dao;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;

import com.sg.oa.letter.model.Letter;

public interface LetterRepository extends LetterRepositoryCustom, CrudRepository<Letter, Long>, JpaSpecificationExecutor<Letter>{

}
