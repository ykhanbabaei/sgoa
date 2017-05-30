package com.sg.oa.referring.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sg.oa.letter.model.Letter;

@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
public class Referring {

	@Id
	private Long id;

	private String subject;

	private String sender;
	private String desc;
	private String image;

	@OneToMany(fetch=FetchType.LAZY)
	@JoinColumn(name="fk_referring")
	private List<Receiver> receivers;

	@OneToMany(fetch=FetchType.LAZY)
	@JoinColumn(name="fk_referring")
	private List<Letter> letters;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public List<Letter> getLetters() {
		return letters;
	}

	public void setLetters(List<Letter> letters) {
		this.letters = letters;
	}

	public String getSender() {
		return sender;
	}

	public void setSender(String sender) {
		this.sender = sender;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public List<Receiver> getReceivers() {
		return receivers;
	}

	public void setReceivers(List<Receiver> receivers) {
		this.receivers = receivers;
	}
	
}
