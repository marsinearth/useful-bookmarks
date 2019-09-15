export default function checkOptimisticUpdate(id) {
  const re = /^client:new\D+\d+$/
  return re.test(id)
}
