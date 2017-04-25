/**
 *	@api {get} /foo/:bar Testing Foo
 *	@apiName GetFoo
 * 	@apiGroup HW1
 *
 *	@apiDescription Function to test work-flow
 *
 *	@apiParam {String} bar Input string to check
 *
 *	@apiSuccess {Boolean} isBaz Boolean that determines if the string is baz or not
 *
 */
var foo = function foo(bar)
{
  return (bar === "baz");
};

exports.foo = foo;
