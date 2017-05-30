package com.sg.oa.referring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sg.oa.letter.service.LetterService;
import com.sg.oa.referring.model.Referring;
import com.sg.oa.referring.service.ReferringService;

@RestController
@RequestMapping("/api")
public class ReferringController {
	
	@Autowired
	private ReferringService referringService;
	
	@Autowired
	private LetterService letterService;
	
	@GetMapping(path="/referring", produces="application/json")
	public List<Referring> findReferrings(@RequestParam("name") String name){
		return referringService.findReferringsBySubject(name);
	}
	
	@GetMapping(path="/referring/{id}", produces="application/json")
	public Referring getReferring(@PathVariable(value = "id") Long id){
		Referring referring = referringService.findById(id);
		return referring;
	}
}
