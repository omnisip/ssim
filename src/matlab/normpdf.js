/**
 * `Y = normpdf(X,μ,σ)` computes the pdf at each of the values in `X` using the normal
 * distribution with mean `μ` and standard deviation `σ`. `X`, `μ`, and `σ` can be vectors,
 * matrices, or multidimensional arrays that all have the same size. A scalar input is expanded to a
 * constant array with the same dimensions as the other inputs. The parameters in `σ` must be
 * positive.
 *
 * The normal pdf is: `y = f(x|μ,σ) = (1 / (σ√(2π))) * e^(-(x-μ)^2/2σ^2)`
 *
 * The likelihood function is the pdf viewed as a function of the parameters. Maximum likelihood
 * estimators (MLEs) are the values of the parameters that maximize the likelihood function for a
 * fixed value of `x`.
 *
 * The standard normal distribution has `µ = 0` and `σ = 1`.
 * If x is standard normal, then `xσ + µ` is also normal with mean `µ` and standard deviation `σ`.
 * Conversely, if `y` is normal with mean `µ` and standard deviation `σ`, then `x = (y – µ) / σ` is
 * standard normal.
 *
 * `Y = normpdf(X)` uses the standard normal distribution (`µ = 0`, `σ = 1`).
 * `Y = normpdf(X,µ)` uses the normal distribution with unit standard deviation (`σ = 1`).
 *
 * @example normpdf([2, 1, 0, 1, 2], 0, 1.5) => [ 0.10934, 0.21297, 0.26596, 0.21297, 0.10934]
 *
 * @method normpdf
 * @param {Array.<Array.<Number>>} X - The input matrix
 * @param {Number} [µ=0] - The length of the filter
 * @param {Number} [σ=1] - The filter sigma value
 * @returns {Array.<Array.<Number>>} Y - Returns the central part of the convolution of the same
 * size as `a`.
 * @public
 * @memberOf matlab
 * @since 0.0.2
 */
function normpdf(X, µ = 0, σ = 1) {
	// Y = ((2 * pi)^(-1 / 2)) * exp(-((x - µ) / σ)^2 / 2) / σ;
	const SQ2PI = 2.5066282746310005024157652848110;
	const Y = [];

	for (let i = 0; i < X.length; i++) {
		const z = (X[i] - µ) / σ;

		Y[i] = Math.exp(-Math.pow(z, 2) / 2) / (σ * SQ2PI);
	}

	return Y;
}

module.exports = {
	normpdf
};
