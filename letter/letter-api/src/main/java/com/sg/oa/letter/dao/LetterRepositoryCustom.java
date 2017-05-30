package com.sg.oa.letter.dao;

import java.util.List;

import com.sg.oa.letter.model.Letter;

public interface LetterRepositoryCustom {
	
	List<Letter> loadAllLetters();

}
