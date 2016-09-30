import {expect} from 'chai'
import getMaskedNumber from '../getMaskedNumber'

describe('test env',function(){
  it('should be 1 for 1',function(){
    expect(getMaskedNumber(1)).to.be.equal(1)
  })
  it('should be 2 for 2',function(){
    expect(getMaskedNumber(2)).to.be.equal(2)
  })
})
