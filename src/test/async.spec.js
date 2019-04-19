const assert = require('assert')
const { findUserByEmail, findUserById } = require('../async')

describe('The async tests',() => {
    describe('findUserById',() => {
        it('should return found user data by id', () => {
            return findUserById(1).then( result => {
                assert.equal(result.user.name, 'trav')
            })
        })
        it('should throw an error if user was not found', () => {
            return findUserById(9).catch(error => {
                assert.equal(error.message, 'User with id: 9 was not found.')
            })
        })
        it('should return found user data by id', () => {
            return findUserById(1).catch(error => {
                assert.equal(result.user.name, 'trav')
            })
        })
    })
    describe('findUserByEmail',() => {
        it('should return found user data by email', () => {
            return findUserByEmail('trav@gmail.com').then( result => {
                assert.equal(result.user.name, 'trav')
            })
        })
        it('should throw an error if user was not found by email', () => {
            return findUserByEmail('s@me.com').catch(error => {
                assert.equal(error.message, 'User with email: s@me.com was not found.')
            })
        })
    })
})