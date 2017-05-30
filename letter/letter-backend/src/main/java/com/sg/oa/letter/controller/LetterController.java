package com.sg.oa.letter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sg.oa.letter.model.Letter;
import com.sg.oa.letter.service.LetterService;

@RestController
@RequestMapping("/api")
public class LetterController {
	
	@Autowired
	private LetterService letterService;
	
	@GetMapping(path="/letter", produces="application/json")
	public List<Letter> getLetters(){
		return letterService.loadAllLetters();
	}
}
