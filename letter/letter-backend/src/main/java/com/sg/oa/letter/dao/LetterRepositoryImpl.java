package com.sg.oa.letter.dao;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sg.oa.letter.model.Letter;

@Service
public class LetterRepositoryImpl implements LetterRepositoryCustom{

	@Override
	public List<Letter> loadAllLetters() {
		return null;
	}

}
