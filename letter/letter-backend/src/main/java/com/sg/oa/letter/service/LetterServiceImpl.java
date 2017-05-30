package com.sg.oa.letter.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sg.oa.letter.dao.LetterRepository;
import com.sg.oa.letter.model.Letter;

@Service
class LetterServiceImpl implements LetterService{

	@Autowired
	private LetterRepository letterRepository;

	@Override
	public List<Letter> loadAllLetters(){
		Iterable<Letter> iterable = letterRepository.findAll();
		List<Letter> list = new ArrayList<>();
		iterable.forEach(list::add);
		return list;
	}

}
