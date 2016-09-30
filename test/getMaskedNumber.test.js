import {expect} from 'chai'
import getMaskedNumber from '../getMaskedNumber'

describe('test env',function(){
  it('should be 1 for 1',function(){
    expect(getMaskedNumber(1)).to.be.equal(1)
  })
  it('should be 2 for 2',function(){
    expect(getMaskedNumber(2)).to.be.equal(2)
  })
  it('should be Fizz for 3',function(){
    expect(getMaskedNumber(3)).to.be.equal('Fizz')
  })
  it('should be Buzz for 5',function(){
    expect(getMaskedNumber(5)).to.be.equal('Buzz')
  })
  it('should be Fizz for 6',function(){
    expect(getMaskedNumber(6)).to.be.equal('Fizz')
  })
  it('should be Buzz for 10',function(){
    expect(getMaskedNumber(10)).to.be.equal('Buzz')
  })
  it('should be Buzz for 15',function(){
    expect(getMaskedNumber(15)).to.be.equal('FizzBuzz')
  })

})
