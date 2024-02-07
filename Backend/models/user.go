package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Id       int `json:"id"`
	Name     string `json:"name"`
	Email    string `json:"email" gorm:"unique;not null"`
	Password string `json:"-"`
}
